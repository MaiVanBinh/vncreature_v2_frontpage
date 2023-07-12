import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken } from '@/api/auth';
import { RANDOM_AUTH_KEY } from '@/utils/constants';

const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET || '',
  passReqToCallback: true,
  expire: '10h',
  refreshExpire: 604800,
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getAccessToken();
  if (
    response?.access_token
    && req.query.auth_key === RANDOM_AUTH_KEY
  ) {
    res.json(response);
  } else {
    // throw new Error('Error getting server token');
  }
}

export default handler;
