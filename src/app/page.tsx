"use client";

import { login } from "@/api/login";
import {
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLogin = async () => {
    setLoading(true);
    setError("");
    const data = { email, password };
    const response = await login(JSON.stringify(data)) as {
      data: { access_token: string, detail: string };
      status: number;
      ok: boolean;
    };
    console.log(response);
    sessionStorage.setItem("token", response.data.access_token);
    if (response.ok) {
      router.push("/dashboard/brand");
    } else {
      setError(response.data.detail);
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ p: 2 }}>
        <Typography>Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormControl>
        <Button
          loading={loading}
          variant="contained"
          fullWidth
          sx={{ my: 1 }}
          onClick={onLogin}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
}
