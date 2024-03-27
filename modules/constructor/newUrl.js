


newUrl()

function newUrl() {
  // 1. new URL(絕對路徑)
  const url1 = new URL('https://www.example.com/path?query=string#fragment')
  /* 
    console.log(url1)
    {
      hash: "#fragment",
      host: "www.example.com",
      hostname: "www.example.com",
      href: "https://www.example.com/path?query=string#fragment",
      origin: "https://www.example.com",
      password: "",
      pathname: "/path",
      port: "",
      protocol: "https:",
      search: "?query=string",
      searchParams: URLSearchParams {size: 1}
      username: ""
    }
  */
  // 2. new URL(絕對路徑, 相對路徑)
  const url2 = new URL('/prosuct?id=123456', 'https://www.example.com')
  /*
    console.log(url2)
    {
      hash: "",
      host: "www.example.com",
      hostname: "www.example.com",
      href: "https://www.example.com/prosuct?id=123456",
      origin: "https://www.example.com",
      password: "",
      pathname: "/prosuct",
      port: "",
      protocol: "https:",
      search: "?id=123456",
      searchParams: URLSearchParams {size: 1},
      username: ""
    }
  */
  // 3. 無效的 URL
  // new URL("/en-US/docs", "");
  // 抛出 TypeError 异常：'' is not a valid URL

  // new URL("/en-US/docs");
  // 抛出 TypeError 异常：'/en-US/docs' is not a valid URL
}