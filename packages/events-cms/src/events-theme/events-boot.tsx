'use client';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

interface Session {
  speaker: string;
  speakerDescription: string;
  title: string;
  start: string;
  end: string;
  duration: string;
  youtube: string;
}

interface EventsComponentProps {
  data: Session[];
}

const EventsComponent: React.FC<EventsComponentProps> = ({ data }) => {

  
  const years = Array.from(new Set(data.map((session) => session.year))).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState<number | null>(years[0]);

  const filteredData = selectedYear ? data.filter((session) => session.year === selectedYear) : data;

  return (
    <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <ButtonGroup>
          {years.map((year) => (
            <Button key={year} onClick={() => setSelectedYear(year)}>{year}</Button>
          ))}
        </ButtonGroup>
      </div>
      {filteredData.map((session: Session, index: number) => (
        <div>
          <Card style={{ margin: 'auto', marginTop: '2rem', maxWidth: '38rem' }}>
            <Card.Header>
              <div>
                <h5 style={{ fontWeight: '600' }}>{session.speaker}</h5>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                  {session.speakerDescription}
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <h4 style={{ fontWeight: '600' }}>{session.title}</h4>
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ClockIcon style={{ height: '1.25rem', width: '1.25rem', color: '#6B7280' }} />
                  <span style={{ color: '#6B7280' }}>
                    {session.start} - {session.end}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ClockIcon style={{ height: '1.25rem', width: '1.25rem', color: '#6B7280' }} />
                  <span style={{ color: '#6B7280' }}>{session.duration} min</span>
                </div>
              </div>
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <YoutubeIcon style={{ height: '1.5rem', width: '1.5rem', color: '#DC2626' }} />
                <span style={{ color: '#2563EB' }}>{session.youtube}</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

function ClockIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle
        cx='12'
        cy='12'
        r='10'
      />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
      <path d='m10 15 5-3-5-3z' />
    </svg>
  );
}

export default EventsComponent;
