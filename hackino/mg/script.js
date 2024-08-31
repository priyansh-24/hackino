// script.js
document.addEventListener('DOMContentLoaded', () => {
  const clubs = [
    {
        name: 'Ml4E',
        posts: [
            {
                title: 'AI Hackathon',
                date: 'August 25, 2024',
                description: 'Participate in our AI Hackathon and showcase your skills in building machine learning models!',
                image: 'path/to/ai-hackathon.jpg'
            },
            {
                title: 'Deep Learning Workshop',
                date: 'September 3, 2024',
                description: 'Join our hands-on workshop on deep learning techniques. Open to all skill levels.',
                image: 'path/to/deep-learning-workshop.jpg'
            }
        ]
    },
    {
        name: 'OpenCode',
        posts: [
            {
                title: 'Open Source Contribution Drive',
                date: 'September 5, 2024',
                description: 'Contribute to open-source projects and learn from experienced developers in the community.',
                image: 'path/to/open-source-contribution.jpg'
            },
            {
                title: 'Git & GitHub Essentials',
                date: 'September 10, 2024',
                description: 'Master the basics of Git and GitHub with our interactive workshop.',
                image: 'path/to/git-github-essentials.jpg'
            }
        ]
    },
    {
        name: 'Cyborg',
        posts: [
            {
                title: 'Robotics Competition',
                date: 'August 30, 2024',
                description: 'Get ready to compete in our annual robotics competition. Bring your bots and your best ideas!',
                image: 'path/to/robotics-competition.jpg'
            },
            {
                title: 'Arduino Workshop',
                date: 'September 8, 2024',
                description: 'Learn to build and program Arduino projects from scratch in this beginner-friendly workshop.',
                image: 'path/to/arduino-workshop.jpg'
            }
        ]
    },
    {
        name: 'APS',
        posts: [
            {
                title: 'Physics Quiz',
                date: 'September 2, 2024',
                description: 'Test your knowledge of physics in our challenging and fun quiz competition.',
                image: 'path/to/physics-quiz.jpg'
            },
            {
                title: 'Astrophotography Session',
                date: 'September 12, 2024',
                description: 'Capture stunning images of the night sky in our astrophotography session. No experience required!',
                image: 'path/to/astrophotography-session.jpg'
            }
        ]
    },
    {
        name: 'Webwiz',
        posts: [
            {
                title: 'Web Development Bootcamp',
                date: 'August 28, 2024',
                description: 'Kickstart your career in web development with our comprehensive bootcamp covering HTML, CSS, and JavaScript.',
                image: 'path/to/web-development-bootcamp.jpg'
            },
            {
                title: 'CSS Animation Tricks',
                date: 'September 6, 2024',
                description: 'Learn how to create eye-catching animations with CSS in this interactive session.',
                image: 'path/to/css-animation-tricks.jpg'
            }
        ]
    },
    {
        name: 'GTA',
        posts: [
            {
                title: 'Gaming Tournament',
                date: 'September 3, 2024',
                description: 'Compete in our gaming tournament featuring popular titles like FIFA, COD, and more. Prizes for winners!',
                image: 'path/to/gaming-tournament.jpg'
            },
            {
                title: 'Virtual Reality Experience',
                date: 'September 15, 2024',
                description: 'Dive into immersive virtual worlds with our VR experience event.',
                image: 'path/to/vr-experience.jpg'
            }
        ]
    },
    {
        name: 'GDSE',
        posts: [
            {
                title: 'App Development Challenge',
                date: 'August 29, 2024',
                description: 'Showcase your app development skills in our challenge. Winners get a chance to work with startups!',
                image: 'path/to/app-development-challenge.jpg'
            },
            {
                title: 'Design Sprint Workshop',
                date: 'September 9, 2024',
                description: 'Join us for a design sprint workshop where you’ll learn to rapidly prototype and test ideas.',
                image: 'path/to/design-sprint-workshop.jpg'
            }
        ]
    }
];


  const clubList = document.getElementById('club-list');
  const clubPosts = document.getElementById('club-posts');
  const searchInput = document.getElementById('search');

  function renderClubList(filteredClubs) {
      clubList.innerHTML = '';
      filteredClubs.forEach(club => {
          const li = document.createElement('li');
          li.textContent = club.name;
          li.addEventListener('click', () => {
              renderClubPosts(club.posts);
          });
          clubList.appendChild(li);
      });
  }

  function renderClubPosts(posts) {
      clubPosts.innerHTML = '';
      posts.forEach(post => {
          const postCard = document.createElement('div');
          postCard.className = 'post-card';

          const postImage = document.createElement('img');
          postImage.src = post.image;

          const postContent = document.createElement('div');
          postContent.className = 'post-content';

          const postTitle = document.createElement('div');
          postTitle.className = 'post-title';
          postTitle.textContent = post.title;

          const postDate = document.createElement('div');
          postDate.className = 'post-date';
          postDate.textContent = post.date;

          const postDescription = document.createElement('div');
          postDescription.className = 'post-description';
          postDescription.textContent = post.description;

          const postActions = document.createElement('div');
          postActions.className = 'post-actions';

          const viewMoreButton = document.createElement('button');
          viewMoreButton.textContent = 'View More';
          // Add more functionality here if needed

          postActions.appendChild(viewMoreButton);
          postContent.appendChild(postTitle);
          postContent.appendChild(postDate);
          postContent.appendChild(postDescription);
          postContent.appendChild(postActions);

          postCard.appendChild(postImage);
          postCard.appendChild(postContent);

          clubPosts.appendChild(postCard);
      });
  }

  function filterClubs(event) {
      const searchTerm = event.target.value.toLowerCase();
      const filteredClubs = clubs.filter(club => club.name.toLowerCase().includes(searchTerm));
      renderClubList(filteredClubs);
  }

  searchInput.addEventListener('input', filterClubs);
  renderClubList(clubs); // Initial render
});
