const API_URL = "http://localhost:8081/api/v1/student";

export const registerStudent = async (data: any) => {
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.text())
    .then((result) => result.data.json())
    .catch((error) => console.error(error))
}


export const updateStudent = async (data: any, id: number) => {
  await fetch(API_URL + id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.text())
    .then((result) => console.log(result))
    .then((error) => console.error(error))
}


export const deleteStudent = async (id: number) => {
  await fetch(API_URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.text())
  .then((result) => console.log(result))
  .then((error) => console.error(error))
}

