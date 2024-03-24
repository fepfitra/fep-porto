interface MediumObjectData {
  title: string;
  link: string;
  author: string;
  published: Date;
  created: Date;
  category: string;
  content: string;
}

class MediumObject {
  constructor(public data: MediumObjectData) {}
}

class Medium {
  data: MediumObject[] = [];

  constructor() {
    this.refresh();
  }

  async refresh() {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/fitrafep/medium/SPXlwHEIscmXRgyq",
        requestOptions,
      );
      const result = await response.text();
      const raw = JSON.parse(result);
      this.data = raw.map((item: MediumObjectData) => new MediumObject(item));
    } catch (error) {
      console.log(error)
    }
  }
}

export default Medium;
