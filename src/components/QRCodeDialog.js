import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeDialog({ open, onClose, url }) {
  if (!open || !url) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle sx={{ fontWeight: 700, textAlign: "center" }}>
        QR Code
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center", py: 3 }}>
        {/* QR Code */}
        <Box sx={{ mb: 2 }}>
          <QRCodeCanvas value={url} size={200} />
        </Box>

        {/* URL Display */}
        <Typography
          variant="body2"
          sx={{
            wordBreak: "break-all",
            backgroundColor: "background.paper",
            p: 1,
            borderRadius: 1,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {url}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default QRCodeDialog;
