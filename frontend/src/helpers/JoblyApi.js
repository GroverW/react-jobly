import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb="get") {
    paramsOrData._token = JSON.parse(localStorage.getItem("token"));
      //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1ODMyODA2ODh9.eCsM9mDHNw089rskD1guovjoVw-PN8_FpAM6i7vXaOs"

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

  static async login({username, password}) {
    try {
      let res = await this.request('login',{username, password}, 'post');
      
      if(res.token) {
        localStorage.setItem("token", JSON.stringify(res.token));
      }
  
      return res;

    }
    catch(err) {
      return err;
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