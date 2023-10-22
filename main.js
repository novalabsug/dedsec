(async () => {
  const domain = location.hostname;

  try {
    const res = await fetch(
      `https://www.virustotal.com/api/v3/domains/${domain}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-apikey":
            "39fc2edc3e21c3abf28db2f64aac9f4156cc407c7bc6ae964aba7e36c025a069",
        },
      }
    );

    // sanagustinturismo.co
    // innovationvillage.africa

    const data = await res.json();

    if (data?.data?.attributes?.last_analysis_stats.malicious > 0) {
      const div = document.createElement("div");
      div.className =
        "fixed bottom-10 right-10 w-fit py-3 px-6 shadow-lg rounded-md bg-white";
      div.setAttribute("id", "popup-warning");
      div.innerHTML = `
              <h3 class="text-lg text-red-500 font-bold">DedSec Warning !!!</h3>
              <p class="text-base my-4">This is has been flagged as fraudulent by ${data?.data.attributes?.last_analysis_stats.malicious} sites</p>
          `;

      document.querySelector("body").appendChild(div);

      setTimeout(() => {
        document.getElementById("popup-warning").classList.add("hidden");
      }, 4500);
    } else {
      const div = document.createElement("div");
      div.className =
        "fixed bottom-10 right-10 w-fit py-3 px-6 shadow-lg rounded-md bg-white";
      div.setAttribute("id", "popup-warning");
      div.innerHTML = `
              <h3 class="text-lg text-green-500 font-bold">DedSec scan</h3>
              <p class="text-base my-4">This site has been scanned and is safe</p>
          `;

      document.querySelector("body").appendChild(div);

      setTimeout(() => {
        document.getElementById("popup-warning").classList.add("hidden");
      }, 4500);
    }
  } catch (error) {
    console.error(error);
  }
})();
