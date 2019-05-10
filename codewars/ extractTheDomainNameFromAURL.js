function domainName(url){
  return(url.replace('http://','').replace('https://','').replace('www.','').split(/[.?#]/)[0]);
}

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
