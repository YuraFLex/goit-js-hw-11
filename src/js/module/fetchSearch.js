import axios from 'axios';

export class SearchQuery {
  baseURL = 'https://pixabay.com/api/';
  params = {
    key: '29916466-fe6d3289f5db071a6af89d00b',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
  };
  async getResponse(query) {
    if (query) {
      this.params.q = query;
    }

    const config = {
      params: this.params,
    };
    return await axios.get(this.baseURL, config);
  }

  increasePage() {
    this.params.page += 1;
  }

  setPage() {
    this.params.page = 1;
  }
}
