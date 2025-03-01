import React from "react";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <>
      {/* Define the spinner keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "8px solid #f3f3f3",
            borderTop: "8px solid #3498db",
            borderRadius: "50%",
            animation: "spin 2s linear infinite",
          }}
        ></div>
        <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#555" }}>
          {message}
        </p>
      </div>
    </>
  );
};

export default Loading;
