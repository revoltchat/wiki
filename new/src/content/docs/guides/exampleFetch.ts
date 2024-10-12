const body = new FormData();
body.append("file", file);

const data = await fetch(`${endpoint}/${tag}`, {
    method: "POST",
    body,
}).then((res) => res.json());

// use data.id