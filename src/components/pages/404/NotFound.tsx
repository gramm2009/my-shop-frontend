import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "840px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница не найдена."
        extra={
          <Button
            type="primary"
            size="large"
            icon={<HomeOutlined />}
            onClick={handleGoHome}
            style={{
              background: "linear-gradient(45deg, #1890ff, #722ed1)",
              border: "none",
              borderRadius: "8px",
              padding: "0 32px",
              height: "48px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Вернуться на главную
          </Button>
        }
        style={{
          padding: "40px",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      />
    </div>
  );
}

export default NotFound;
