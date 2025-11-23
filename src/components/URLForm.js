import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Stack, Alert } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

function URLForm({ refresh }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // Basic validation
    if (!originalUrl.trim()) {
      setErrorMsg("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${API}/api/links`, {
        original_url: originalUrl.trim(),
        short_id: shortId.trim() || null,
      });

      // Clear fields
      setOriginalUrl("");
      setShortId("");

      refresh();
    } catch (err) {
      const message =
        err.response?.data?.error || "Something went wrong. Try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {/* Error Message */}
        {errorMsg && (
          <Alert severity="error" onClose={() => setErrorMsg("")}>
            {errorMsg}
          </Alert>
        )}

        {/* Long URL Input */}
        <TextField
          label="Long URL"
          placeholder="https://example.com/very/long/link"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          fullWidth
          required
        />

        {/* Custom Short ID */}
        <TextField
          label="Custom code (optional)"
          placeholder="6–8 letters or numbers"
          value={shortId}
          onChange={(e) => setShortId(e.target.value)}
          fullWidth
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Creating..." : "Shorten URL"}
        </Button>
      </Stack>
    </Box>
  );
}

export default URLForm;
