import React from "react";
import emailjs from "emailjs-com";
import "./email.css";
import { useState } from "react";

export default function Email({ id }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("idie");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_tlqa36m",
        "template_viagqxh",
        formData,
        "YoDOt0f7OSsaJtWOe"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", subject: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };
  return (
    <>
      <div id="email-section" className="email-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Me envie um E-mail</h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Qual assunto?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>

          {status === "success" && <p>Email enviado com sucesso!</p>}
          {status === "error" && <p>Erro ao enviar. Tente novamente.</p>}
        </form>
      </div>
    </>
  );
}
