import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import TeamCard from "../common/TeamCard";
import teamService from "../../services/team-service";

const TeamMembers = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await teamService.getAll();
        setTeam(response.data);
      } catch (err) {
        setError("Failed to fetch team members. Please try again later.");
        console.error("Error fetching team:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();

    // ScrollReveal animations
    ScrollReveal().reveal(".team-card", {
      delay: 300,
      distance: "30px",
      origin: "bottom",
      opacity: 0,
      duration: 1000,
      reset: true,
      scale: 0.9,
      easing: "ease-in-out",
      interval: 200,
    });
    ScrollReveal().reveal(".sr-community-empowerment", {
      opacity: 0,
      x: -50,
      duration: 1000,
      delay: 600,
      reset: true,
    });
  }, []);

  if (loading)
    return (
      <div className="text-center text-primary font-body py-4">
        Loading team members...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 font-body py-4">{error}</div>
    );

  return (
    <section name="teams" className="py-24 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-12 sr-community-empowerment">
          <h3 className="text-primary text-3xl font-bold sm:text-5xl font-heading">
            Meet Our Team
          </h3>
          <p className="text-gray-700 mt-3 text-xl font-body">
            A passionate team committed to innovation and excellence.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.lenght > 0 ? (
            team.map((member, idx) => (
            <div key={idx} className="team-card">
              <TeamCard
                avatar={member.avatar}
                name={member.name}
                title={member.title}
                desc={member.desc}
                socialLinks={member.socialLinks}
              />
            </div>
          ))):(
            <p>
              Teams Members is Not found !
            </p>
          ) }
  
        </div>

        <div className="mt-20 text-center reveal">
          <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
            Shape Spaces That Inspire!
          </h3>
          <div className="flex justify-center gap-4">
            <Link
              to="/career"
              className="px-4 md:px-8 py-2 md:py-3 text-gray-800 bg-accent hover:bg-opacity-80 rounded-lg flex items-center gap-2 transition-colors font-body"
            >
              Join Our Team <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
