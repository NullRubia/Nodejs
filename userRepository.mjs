import { db } from "./db.mjs";

export async function getUsers() {
  //const [rows] = await db.query("select * from member")의 반환은 [rows, fields]
  const [rows] = await db.query("select * from member");
  //console.log(rows);
  return rows;
}

export async function createUser(
  userid,
  userpw,
  name,
  hp,
  email,
  gender,
  ssn1,
  ssn2,
  zipcode,
  address1,
  address2,
  address3
) {
  const [result] = await db.query(
    "insert into member (userid, userpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userid,
      userpw,
      name,
      hp,
      email,
      gender,
      ssn1,
      ssn2,
      zipcode,
      address1,
      address2,
      address3,
    ]
  );
  return result.insertId;
}

//update
export async function updateUser(idx, newEmail) {
  const [result] = await db.query("update member set email=? where idx=?", [
    newEmail,
    idx,
  ]);
  return result.affectedRows;
}

//delete

export async function deleteUser(idx) {
  const [result] = await db.query("delete from member where idx=?", [idx]);
  return result.affectedRows;
}
