import { Button } from "antd";
import GithubButton from "./GitHubButton";
export default function DownloadPage() {
  const downloadExe = () => {
    window.location.href =
      "https://github.com/alibadawi25/executables/releases/download/v0.0.1/Code.For.Life.exe";
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {/* Banner Image */}
      <img
        src="https://i.ibb.co/zhQn8QGq/Code-for-life.png" // Replace with your own image
        alt="Banner"
        style={{
          width: "80%",
          maxWidth: "800px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <h1>Download Code For Life</h1>

      {/* Description */}
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
        "Code For Life" is an exciting game that makes you learn how to code in
        a fun way!!
      </p>

      {/* Container for button and secondary image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Secondary Image Next to Button */}
        <img
          src="https://i.ibb.co/bRJ53BZS/Code-For-life-1.png" // Replace with your own image
          alt="Download Icon"
          style={{ width: "80px", marginRight: "10px" }} // Adjust size and margin
        />
        <Button type="primary" size="large" onClick={downloadExe}>
          Download Now
        </Button>
      </div>

      <div style={{ textAlign: "center", padding: "50px" }}>
        {/* GitHub Button */}
        <GithubButton />
      </div>
    </div>
  );
}
