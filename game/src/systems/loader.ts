// TODO finish the documentation of public methods
import Player from "../entities/player"
import ILoader from "../interfaces/iLoader"
import IPlayerProps from "../interfaces/iPlayerProps"

class Loader implements ILoader {
  private static _load: Loader
  private static domain: string = "http://localhost:3000/"

  private constructor() {}

  public static load(): Loader {
    if (!Loader._load) {
      Loader._load = new Loader()
    }

    return Loader._load
  }

  // Make the `request` function generic
  // to specify the return data type:
  request<IPlayerProps>(
    url: string,
    // `RequestInit` is a type for configuring
    // a `fetch` request. By default, an empty object.
    config: RequestInit = {}

    // This function is async, it will return a Promise:
  ): Promise<IPlayerProps> {
    // Inside, we call the `fetch` function with
    // a URL and config given:
    return (
      fetch(url, config)
        // When got a response call a `json` method on it
        .then((response) => response.json())
        // and return the result data.
        .then((data) => data as IPlayerProps)
    )

    // We also can use some post-response
    // data-transformations in the last `then` clause.
  }

  public configuration(directory: string) {
    this.getFromAPI(directory)
  }

  public assets(directory: string) {
    this.getFromAPI(directory)
  }

  public multipliers(directory: string) {
    this.getFromAPI(directory)
  }

  private getFromAPI(directory: string, playerId?: number): any {
    if (playerId) {
      fetch(Loader.domain.concat(directory).concat("/").concat(playerId.toString()))
        .then((response) => response.json())
        .then((json) => {
          // console.log(json)
          return json
        })
        .catch((err) => console.error(err))
    } else {
      fetch(Loader.domain.concat(directory))
        .then((response) => response.json())
        .then((json) => {
          // console.log(json)
          return JSON.stringify(json)
        })
        .catch((err) => console.error(err))
    }
  }
}

export default Loader
