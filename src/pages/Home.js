import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Tabs,
  Tab,
  Grow,
} from "@mui/material";
import URLForm from "../components/URLForm";
import LinksTable from "../components/LinksTable";
import StatsBar from "../components/StatsBar";

const API = process.env.REACT_APP_API_URL;

function Home() {
  const [links, setLinks] = useState([]);
  const [tab, setTab] = useState(0);

  async function loadLinks() {
    const res = await axios.get(`${API}/api/links`);
    setLinks(res.data);
  }

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <Box maxWidth="lg" sx={{ mx: "auto" }}>
      {/* Header + stats */}
      <Grow in={true} timeout={500}>
        <Paper
          elevation={3}
          sx={{ p: 3, mb: 3, borderRadius: 3, overflow: "hidden" }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Task_Link 🔗
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Modern URL shortener with stats, QR codes and a clean dashboard UI.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <StatsBar links={links} />
          </Box>
        </Paper>
      </Grow>

      {/* Main card: form + tabs */}
      <Grow in={true} timeout={700}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
          <Tabs
            value={tab}
            onChange={(_, value) => setTab(value)}
            sx={{ mb: 2 }}
          >
            <Tab label="Links" />
            <Tab label="Analytics" />
          </Tabs>

          <Divider sx={{ mb: 3 }} />

          {tab === 0 && (
            <Box>
              <Box sx={{ mb: 3 }}>
                <URLForm refresh={loadLinks} />
              </Box>
              <LinksTable links={links} refresh={loadLinks} />
            </Box>
          )}

          {tab === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Analytics Overview
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                View your most clicked links and recent activity at a glance.
              </Typography>

              {/* Reuse StatsBar inside analytics tab as well */}
              <Box sx={{ mb: 3 }}>
                <StatsBar links={links} />
              </Box>

              {/* Simple “top 5 links” list */}
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Top Links by Clicks
                </Typography>
                {links.length === 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    No data yet. Create a link first.
                  </Typography>
                ) : (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      p: 0,
                      m: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}
                  >
                    {[...links]
                      .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
                      .slice(0, 5)
                      .map((link) => (
                        <Box
                          key={link.code}
                          component="li"
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider",
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.5,
                          }}
                        >
                          <Typography variant="body2" fontWeight={600}>
                            {API}/{link.code}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ wordBreak: "break-all" }}
                          >
                            {link.targetUrl}
                          </Typography>
                          <Typography variant="caption">
                            Clicks: <b>{link.clicks}</b> • Created:{" "}
                            {new Date(link.createdAt).toLocaleString()}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Paper>
      </Grow>
    </Box>
  );
}

export default Home;
