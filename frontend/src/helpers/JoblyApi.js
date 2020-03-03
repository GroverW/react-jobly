import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb="get") {
    paramsOrData._token = (
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U"
    );

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async getJobs(data) {
    let res = await this.request(`jobs`, data);
    return res.jobs;
  }

  static async getCompanies(data) {
    let res = await this.request(`companies`, data);
    return res.companies;
  }

  static async addJob(data) {
    let res = await this.request('jobs', data, 'post');
    return res.job;
  }

  static async addCompany(data) {
    let res = await this.request('companies', data, 'post');
    return res.company;
  }

  static async updateJob(data) {
    let res = await this.request('jobs', data, 'patch');
    return res.job;
  }

  static async updateCompany(data) {
    let res = await this.request('companies', data, 'patch');
    return res.company;
  }

  static async deleteJob(id) {
    let res = await this.request(`jobs/${id}`, {}, 'delete');
    return res.message;
  }

  static async deleteCompany(handle) {
    let res = await this.request(`companies/${handle}`, {}, 'delete');
    return res.message;
  }

  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, 'post');
    return res.message;
  }
}

export default JoblyApi;