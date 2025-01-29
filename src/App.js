import { Button } from "antd";

export default function DownloadPage() {
  const downloadExe = () => {
    window.location.href =
      "https://github.com/alibadawi25/executables/releases/download/v0.0.0/Code.For.Life.exe";
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Download Code For Life</h1>
      <Button type="primary" size="large" onClick={downloadExe}>
        Download Now
      </Button>
    </div>
  );
}
