import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Stack } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

function URLForm({ refresh }) {
  const [targetUrl, setTargetUrl] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/api/links`, {
        targetUrl,
        code: code || null,
      });

      setTargetUrl("");
      setCode("");
      refresh();
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Long URL"
          placeholder="https://example.com/very/long/link"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Custom code (optional)"
          placeholder="6–8 letters/numbers"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
        />

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Creating..." : "Shorten URL"}
        </Button>
      </Stack>
    </Box>
  );
}

export default URLForm;
