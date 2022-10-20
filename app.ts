import express, { Request, Response, NextFunction } from 'express';
import { HoldingData } from "./models/holding-data";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

const getHoldingData = (request: Request, response: Response, next: NextFunction) => {
    let holding: HoldingData[] = [
     
      
    ];
  
    response.status(200).json(holding);
  };

  app.get('/holdingData', getHoldingData);
  