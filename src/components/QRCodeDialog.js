import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeDialog({ open, onClose, url }) {
  if (!url) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>QR Code</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <QRCodeCanvas value={url} size={200} />
        <p style={{ wordBreak: "break-all", marginTop: 8 }}>{url}</p>
      </DialogContent>
    </Dialog>
  );
}

export default QRCodeDialog;
