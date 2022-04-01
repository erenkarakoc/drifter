import * as axios from "axios"

export default class Api {
  constructor() {
    this.api_token = null
    this.client = null
    this.api_url = "https://drifter.ocify.site/api/"
  }

  init = () => {
    this.api_token = "notset"

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    }

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    })

    return this.client
  }

  registerPhone = (data) => {
    return this.init().post("register-phone", data)
  }

  activatePhone = (data) => {
    return this.init().post("activate-phone", data)
  }
}
