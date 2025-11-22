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

  async function deleteLink(code) {
    if (!window.confirm("Delete this link?")) return;
    await axios.delete(`${API}/api/links/${code}`);
    refresh();
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  function openQr(url) {
    setQrUrl(url);
    setQrOpen(true);
  }

  function closeQr() {
    setQrOpen(false);
    setQrUrl("");
  }

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
              const shortUrl = `${API}/${link.code}`;

              return (
                <TableRow key={link.code}>
                  <TableCell>
                    <MuiLink
                      href={shortUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {shortUrl}
                    </MuiLink>
                  </TableCell>

                  <TableCell>{link.targetUrl}</TableCell>

                  <TableCell>{link.clicks}</TableCell>

                  <TableCell align="right">
                    <Tooltip title="Copy">
                      <IconButton
                        size="small"
                        onClick={() => copyToClipboard(shortUrl)}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="QR Code">
                      <IconButton
                        size="small"
                        onClick={() => openQr(shortUrl)}
                      >
                        <QrCodeIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => deleteLink(link.code)}
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

      <QRCodeDialog open={qrOpen} onClose={closeQr} url={qrUrl} />
    </>
  );
}

export default LinksTable;
