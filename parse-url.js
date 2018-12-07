'use strict';

/* function parseURL(url) {
  var parser = document.createElement('a'),
  searchObject = {},
  queries, split, i;
  // Let the browser do the work
  parser.href = url;
  // Convert query string to object
  queries = parser.search.replace(/^\?/, '').split('&');
  for( i = 0; i < queries.length; i++ ) {
    split = queries[i].split('=');
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject: searchObject,
    hash: parser.hash
  };
} */

// https://www.abeautifulsite.net/parsing-urls-in-javascript

const url =
  'http://www.xiyanghui.com/product/list?id=123456&sort=discount#title';

const parseUrl = url => {
  const parser = document.createElement('a');
  const searchObject = {};
  let queries;
  let split;

  parser.href = url;
  queries = parser.search.replace(/^\?/, '').split('&');
  for (const query of queries) {
    split = query.split('=');
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    path: parser.pathname,
    query: {
      id: searchObject['id'],
      sort: searchObject['sort']
    },
    hash: parser.hash
  };
};

parseUrl(url);
