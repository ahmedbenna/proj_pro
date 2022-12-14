import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import ProviderCard from '../comp/provider/ProviderCard'
import axios from 'axios'
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
export default function Team() {

  const [providers, setProviders] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProvider() {
      try {
        const response = await axios.get('http://localhost:8088/provider/getAllProvider');
        console.log(response);
        var res = response.data.sort(({ feed: a }, { feed: b }) => b - a);
        const first3 = res.slice(0, 20)
        setProviders(first3);
        console.log("ccccc", providers);
        // setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getProvider();
  }, [loading]);
  return (
    <>
      <div class="team">
        <div class="container">
          <div class="section-header text-center">
            <p>Our Team</p>
            <h2>Meet Our Providers</h2>
          </div>
          <div class="row">
            {(providers) ? (

              <div className="row">
                {providers.map(p =>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">

                    <Link key={p.id} style={{ textDecoration: 'none' }} state={{ id: p.id }} to='/ProviderPresenting'>
                      <ProviderCard speciality={p.speciality}firstName={p.firstName} lastName={p.lastName} />
                    </Link>

                  </div>
                )}
              </div>

            ) : (
              <div className="team">
                <div className="container">
                  <CircularProgress />
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </>
  )
}
