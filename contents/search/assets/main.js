//const { use } = require("react");

// wait for onLoad()
window.onload = function () {
  checkForSearch();
};

// check for 'q'
function checkForSearch() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get('q');

  if (searchText) {
    handleSearch(searchText.toLowerCase());
  } else {
    document.getElementById(
      'search-list'
    ).innerHTML = `<div><p>No posts available.</p></div>`;
    delayedShow();
  }
}

// prevent content flickering
function delayedShow() {
  setTimeout(showData, 100);
}

// show search list
function showData() {
  document.getElementById('search-list').style.visibility = 'visible';
}

async function handleSearch(searchText) {
  try {
    const responseData = await postFormDataAsJson();

    console.log('1');

    const results = responseData.filter(function (item) {
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.contents.html.toLowerCase().includes(searchText)
      );
    });

    const countEl = document.getElementById('result-count');
    if (countEl) {
      countEl.textContent = results.length;
    }

    // Change grid class based on number of results
    const searchList = document.getElementById('search-list');
    if (searchList) {
      if (results.length >= 9) {
        searchList.classList.remove('author-grid');
        searchList.classList.add('author-grid-321');
      } else {
        searchList.classList.remove('author-grid-321');
        searchList.classList.add('author-grid');
      }
    }

    // decide layout class based on number of results
    const layoutClass =
      results.length > 0 && results.length < 9
        ? 'author-posts-list'
        : 'author-posts-grid';

    const innerHTML = results
      .map(function (item) {
        const authors = item.authors.map((item) => ({
          name: item.title,
          link: item.permalink,
          image: item.image,
        }));
        const html = createPostCard({
          title: item.title,
          permalink: item.permalink,
          image: item.image,
          date: item.publication.date.medium,
          authors: authors,
          layoutClass: layoutClass,
        });

        return html;
      })
      .join('');

    console.log('2');

    if (innerHTML.trim() === '') {
      document.getElementById(
        'search-list'
      ).innerHTML = `<div><p id="no-results">No Posts Available</p></div>`;
    } else {
      document.getElementById('search-list').innerHTML = innerHTML;
    }
    delayedShow();
  } catch (error) {
    alert(`Something went wrong.\n${error}`);
  }
}

// load data from api/posts.json
async function postFormDataAsJson() {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  // get baseUrl value
  let baseUrlValue = document.getElementById('baseUrlValue').textContent;
  const response = await fetch(baseUrlValue + '/api/posts.json', fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }
  throw new Error('Invalid response, not a valid JSON object.');
}

function createPostCard({
  title,
  permalink,
  image,
  date,
  authors = [],
  layoutClass,
}) {
  return `
        <div class="author-post-card">
            <div class="${layoutClass}">
                <a href="${permalink}" target=""><img src="${image}"></a>
                <div class="author-data">
                    <div class="author-post-meta">
                        <time datetime="${date}">${date}</time>
                        
                        ${authors
                          .map(
                            (author) =>
                              `<a href="${author.link}">${author.name}</a>`
                          )
                          .join('')}
                    </div>
                    <div class="author-post-title"><a href="${permalink}" target="">${title}</a></div>
                </div>
            </div>
        </div>
    `;
}
