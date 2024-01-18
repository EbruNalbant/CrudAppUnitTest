import { render, screen, within } from "@testing-library/react";
import UserList from ".";
import { users } from "./../constants";
import { expect } from "vitest";

it("gönderilen her kullanıcı için ekrana tablo satırı basılır", () => {
  // prop olarak bir değer alan bileşeni test etme
  render(<UserList users={users} />);

  // users tablosu içerisindeki bütün satırları alma
  const body = screen.getByTestId("table-body");

  //  belirli bir kapsayıcı içerisindeki elemanları seçme
  const rows = within(body).getAllByRole("row");

  //  kullanıcı sayısı kadar satır var mı?
  expect(rows).toHaveLength(users.length);
});

it("her bir kullanıcı için name, email ve age değerleri tablo hücresi olarak ekrana basılır", () => {
  render(<UserList users={users} />);

  /* her bir kullanıcı için ekrandaki tablo
     hücrelerinde name, email, age değerleri yazıyor mu? */

  for (const user of users) {
    // kullanıcının name'ini içeren tablo hücresini alma
    const name = screen.getByRole("cell", { name: user.name });
    // kullanıcının email'ini içeren tablo hücresini alma
    const mail = screen.getByRole("cell", { name: user.email });
    // kullanıcının age'ini içeren tablo hücresini alma
    const age = screen.getByRole("cell", { name: user.age });

    // hücrelerde ekranda mı kontrol?
    expect(name).toBeVisible();
    expect(mail).toBeVisible();
    expect(age).toBeVisible();
  }
});
