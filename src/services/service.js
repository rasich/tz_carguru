export default class Service {
  _apiBase = 'https://rest.carguru.lv/public/api/short-rate';

  
  // GET
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}`);
    if (!res.ok) {
      throw new Error(`Could not fetch` + 
        `, received ${res.status}`);
    }
    return await res.json();
  }
}