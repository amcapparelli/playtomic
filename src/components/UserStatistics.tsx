import * as React from 'react';

type Statistics = {
  ranking: number,
  win: number,
  lose: number
}

type Props = {
  statistics: Statistics
}

const UserStatistics: React.FC<Props> = ({ statistics }: Props): JSX.Element => {
  const { ranking, win, lose } = statistics;
  return (
    <>
      <p>Wins: {win}</p>
      <p>Lose: {lose}</p>
      <p>Ranking: {ranking}</p>
    </>
  );
}

export default UserStatistics;
