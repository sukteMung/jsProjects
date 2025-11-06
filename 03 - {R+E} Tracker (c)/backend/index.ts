import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route: look up Riot ID -> get PUUID -> then summoner data
app.get("/api/account/:gameName/:tagLine", async (req, res) => {
  const { gameName, tagLine } = req.params;

  console.log(gameName);
  console.log(tagLine);
  try {
    // Step 1: Get Riot Account by Riot ID
    const accountRes = await axios.get(
      // `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(
      //   gameName
      // )}/${encodeURIComponent(tagLine)}`,
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/LickWidFyre/Licky`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY!,
        },
      }
    );

    console.log(tagLine);

    // The Riot API already returns this structure:
    // { puuid, gameName, tagLine }
    const { puuid, gameName: riotName, tagLine: riotTag } = accountRes.data;

    // Step 2: (Optional) Fetch additional info by puuid
    const summonerRes = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY!,
        },
      }
    );

    // Return a combined object
    res.json({
      puuid,
      gameName: riotName,
      tagLine: riotTag,
      summoner: summonerRes.data, // optional, remove if not needed
    });
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch account data" });
  }
});
