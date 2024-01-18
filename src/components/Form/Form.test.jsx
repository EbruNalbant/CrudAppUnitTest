import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import Form from ".";
import user from "@testing-library/user-event";

const testUser = {
  name: "duygu",
  email: "duygu@gmail.com",
  age: "32",
};

it("form gönderilince 'addUser' doğru parametreleri alarak çalışıyor mu?", async () => {
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  // gerekli elemanları çağırma
  const nameInp = screen.getByLabelText("Name");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Age");
  const submitBtn = screen.getByRole("button");

  // name inputunu doldurma
  await user.click(nameInp);
  await user.keyboard(testUser.name);

  // email inputunu doldurma
  await user.type(mailInp, testUser.email);

  // age inputunu doldurma
  await user.type(ageInp, testUser.age);

  //  formu gönderme
  await user.click(submitBtn);

  // form gönderilince addUser fonksiyonu çağrılır
  expect(mock).toBeCalled();

  // fonksiyon çağrılırken doğru argümanlar gönderiliyor mu?
  expect(mock).toBeCalledWith(testUser);
});
