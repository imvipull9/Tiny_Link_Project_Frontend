import React, { useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Link as MuiLink,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import QrCodeIcon from "@mui/icons-material/QrCode2";

import QRCodeDialog from "./QRCodeDialog";

const API = process.env.REACT_APP_API_URL;

function LinksTable({ links, refresh }) {
  const [qrUrl, setQrUrl] = useState("");
  const [qrOpen, setQrOpen] = useState(false);

  // Delete a link
  async function deleteLink(short_id) {
    if (!window.confirm("Delete this link?")) return;

    try {
      await axios.delete(`${API}/api/links/${short_id}`);
      refresh();
    } catch (err) {
      console.error("❌ Delete error:", err);
      alert("Failed to delete. Please try again.");
    }
  }

  // Copy URL
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  }

  // Open QR popup
  function openQr(url) {
    setQrUrl(url);
    setQrOpen(true);
  }

  // Close QR popup
  function closeQr() {
    setQrOpen(false);
    setQrUrl("");
  }

  // Empty state
  if (!links || links.length === 0) {
    return <p>No links yet. Create one above.</p>;
  }

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Short URL</TableCell>
              <TableCell>Target URL</TableCell>
              <TableCell>Clicks</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {links.map((link) => {
              const shortUrl = `${API}/${link.short_id}`;

              return (
                <TableRow key={link.short_id}>
                  {/* Short URL */}
                  <TableCell>
                    <MuiLink href={shortUrl} target="_blank" rel="noreferrer">
                      {shortUrl}
                    </MuiLink>
                  </TableCell>

                  {/* Original URL */}
                  <TableCell style={{ maxWidth: 300, wordBreak: "break-all" }}>
                    {link.original_url}
                  </TableCell>

                  {/* Click Count */}
                  <TableCell>{link.clicks}</TableCell>

                  {/* Actions */}
                  <TableCell align="right">
                    {/* Copy */}
                    <Tooltip title="Copy Short Link">
                      <IconButton
                        size="small"
                        onClick={() => copyToClipboard(shortUrl)}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    {/* QR Code */}
                    <Tooltip title="Show QR Code">
                      <IconButton size="small" onClick={() => openQr(shortUrl)}>
                        <QrCodeIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    {/* Delete */}
                    <Tooltip title="Delete Link">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => deleteLink(link.short_id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* QR Popup */}
      <QRCodeDialog open={qrOpen} onClose={closeQr} url={qrUrl} />
    </>
  );
}

export default LinksTable;
