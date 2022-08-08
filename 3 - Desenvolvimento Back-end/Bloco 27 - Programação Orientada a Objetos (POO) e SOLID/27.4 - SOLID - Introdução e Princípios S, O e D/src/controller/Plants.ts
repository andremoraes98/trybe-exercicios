/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import Plants from '../model/Plants';

const plantModel = new Plants();

const getPlants = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await plantModel.getPlants();
  
    res.json(result);
  } catch (e) {
    const erro = e as Error;
    res.status(500).json({ message: erro.message });
  }
};

export default getPlants;