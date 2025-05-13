const componentUrls = {
  todo: "./src/pages/todo.html",
  login: "./src/pages/login.html",
  register: "./src/pages/register.html",
  dashboard: "./src/pages/dashboard.html",
};
async function ReturnedComponent(key) {
    try {
      console.log(componentUrls[key]);
    const res = await fetch(componentUrls[key]);
    if (!res.ok) throw new Error("Network response was not ok");
    const htmlString = await res.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, "text/html");
    return html.body.firstChild;

  } catch (err) {
    console.error("Error loading component:", err);
  }
}
// ReturnedUiHtml("todo").then((html) => console.log(html));


export  {ReturnedComponent};





