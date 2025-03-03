import { useState } from "react";
import { Button, Input, Textarea, Container } from "@mantine/core";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", file as Blob);
    formData.append("title", title);
    formData.append("description", description);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    alert("Video uploaded successfully!");
  };

  return (
    <Container>
      <Input placeholder="Video Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Textarea placeholder="Video Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <Button onClick={handleUpload} mt="md">Upload</Button>
    </Container>
  );
}
