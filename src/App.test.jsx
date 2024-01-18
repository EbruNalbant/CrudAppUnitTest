import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

it("Uygulama doğru şekilde çalışıyor mu?", async () => {
  render(<App />);
  user.setup();

  // gerekli bileşenleri çağırma
  const nameInp = screen.getByPlaceholderText("e.g.: Ada");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Age");
  const button = screen.getByRole("button", { name: /add user/i });

  // formu doldurma
  await user.type(nameInp, "Deniz");
  await user.type(mailInp, "deniz@gmail.com");
  await user.type(ageInp, "34");

  // formu gönderme
  await user.click(button);

  // name, mail ve age değerlerine karşılık gelen hücreler ekrana basıldı mı?
  screen.getByRole("cell", { name: "Deniz" });
  screen.getByRole("cell", { name: "deniz@gmail.com" });
  screen.getByRole("cell", { name: "34" });
});
