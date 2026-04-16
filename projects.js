// projects.js
// -----------------------------
// SMGT 490 Projects Data
// -----------------------------

const PROJECTS = [
  {
    id: "p1",
    year: 2026,
    title: "Sources of Variation in Swing Path Tilt and its Relationship to Offensive Performance and Streakiness",
    authors: "Nathaniel Ascher",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "This project investigates the sources of variation in swing path tilt for the 2025 MLB Season and swing path tilt’s relationship to offensive performance and streakiness. The main hypothesis for this project is that the variation in swing path tilt can be broken down into three factors: timing, mechanical inconsistency and the conscious choice for a batter to change their swing, and noise. Generalized Additive Models (GAMs) are used to find out how much each of the three factors contributes to the overall variation. Roughly 1.5% of the variation can be attributed to timing, 68.4% to mechanical inconsistency and conscious choice, and 30.1% to noise. Mixed-effects models evaluate the relationship between swing path tilt and offensive performance (wOBA) and streakiness (wOBA across 10-game, non-rolling windows). Results show that a very small, but positive relationship between swing path tilt and wOBA exists. There does not seem to be any relationship between variance in swing path tilt and offensive streakiness. A linear regression model also measures the relationship between each hitter’s strikeout rate in the 2025 season and the correlation between their actual and predicted (based on count, pitch group, and location) swing path tilt. There is a statistically significant (95% confidence level) negative relationship between the correlation of actual and predicted swing path tilt and strikeout rate, implying that hitters whose swing path tilt is closer to what the context of the pitch suggests it should be tend to strike out slightly less.",
    links: {
      doi: "",
      code: "",
      poster: null,
      pdf: null
    },
    thumbnail: null
  },

  {
    id: "p2",
    year: 2026,
    title: "Introducing Blend+: Evaluating Pitch Arsenals as an Orchestra",
    authors: "Theo Au-Yeung",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "Previously, I evaluated the effects of pitch sequencing at the pitcher level to derive how much added value pitchers gained by sequencing effectively. In that paper, we also conducted a base-level exploration of Arsenal+ using 2D separation calculations. This study will expand that exploration, introducing a more complex methodology to derive Arsenal through the use of pitch probability models and usage entropy. This study uses a two part framework to investigate the effects of pitch arsenal effects on pitching performance. Modern Stuff+ and pitch characteristic based metrics fail to recognize the effects that surrounding pitches in a pitcher’s repertoire can have on the effectiveness of individual pitches. Pitchers who lack the arm talent to produce elite stuff rely on the breadth and depth of their pitch mix to generate positive outcomes against batters.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
  {
    id: "p3",
    year: 2026,
    title: "Are offenses making a strategic mistake by not utilizing a fullback in their offense, and how can analytics support or not support the value of the fullback?",
    authors: "Micah Barnett",
    venue: "Football",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p4",
    year: 2026,
    title: "Pool Advantage in NCAA Swimming Performance",
    authors: "Lily Cramer",
    venue: "Swimming",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p5",
    year: 2026,
    title: "Projecting College Football Player Performance in the age of NIL and the Transfer Portal",
    authors: "Lucca Ferraz",
    venue: "Football",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
       {
    id: "p17",
    year: 2026,
    title: "Reevaluating Pitcher Aging Curves in the Statcast Era ",
    authors: "Alicia Garza",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "This study investigates whether the peak performance age of Major League Baseball pitchers has shifted in the Statcast era, which is characterized by increased velocity and advanced tracking technology. Using pitcher-season data from 2015–present and historical data from 1985–2000, linear mixed-effects models are applied to estimate aging curves while controlling for workload and performance metrics. <br><br> The results suggest that pitchers in the Statcast era reach peak performance earlier, in the mid-twenties rather than around age thirty, and experience a steeper decline after age thirty. Additionally, higher fastball velocity is associated with better performance and more sustained effectiveness across a pitcher’s career. These findings indicate that modern pitching demands may be contributing to earlier peaks and shorter performance windows, with implications for player development and team decision-making.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p6",
    year: 2026,
    title: "Evaluating Batters in Cricket using Markov Chain Processes",
    authors: "Kushal Gupta",
    venue: "Cricket",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p7",
    year: 2026,
    title: "Quantifying Coaching Value in the National Football League",
    authors: "Will Kinnebrew",
    venue: "Football",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p8",
    year: 2026,
    title: "How should players be making measurable changes to their swings in certain situations?",
    authors: "Ian Kleppinger",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p9",
    year: 2026,
    title: "Pitch Sequencing’s Impact on Hitter Swing Quality",
    authors: "Dante Maurice",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "Pitch-calling is one of the most fascinating strategic decisions in sports. The goal is to keep the hitter off-balanced and induce poor swings. Recent work has found a way to categorize hitters’ swings (good versus bad). Now, this work will incorporate pitch sequencing to see how pitch calling can impact a hitter’s swing quality. Expanding on previous work that used Gaussian Mixture Modeling to model swing quality and a random forest model to predict it based on pitch sequencing factors, this study addresses the question of whether pitch sequencing impacts hitter swing quality. Ultimately, results are moderate across the entire population of MLB hitters. However, deeper dives into specific hitters, such as Yandy Diaz, demonstrate that some hitters are susceptible to a pitcher’s sequencing.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p10",
    year: 2026,
    title: "Do Sportsbooks Overreact to Recent Performance? Evidence from Blowout Wins in the NFL",
    authors: "Sean McGarry",
    venue: "Sports Betting",
    summary:
      "",
    abstract:
      "This study examines whether NFL betting markets systematically overreact to extreme recent performance, specifically large-margin (“blowout”) victories. Drawing on regular-season data from 2015–2025 obtained via nflfastR, I test whether teams coming off blowout wins are subsequently overpriced, as measured by their likelihood of covering the point spread and by spread error magnitude. Logistic regression models, linear regression models, interaction tests for high-attention games, and betting strategy backtests are employed. While recent margins of victory strongly predict subsequent point spreads, I find no statistically or economically significant evidence that teams coming off blowout wins are systematically overpriced. Betting strategies that fade blowout teams do not generate abnormal returns. These findings suggest that NFL betting markets efficiently incorporate extreme recent performance without systematic overreaction, even in highly salient contexts.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p11",
    year: 2026,
    title: "Comparing Age Curves and Random Forests for Quarterback Trajectories",
    authors: "Elisabeth Millington",
    venue: "Football",
    summary:
      "",
    abstract:
      "Forecasting quarterback performance is an important problem in NFL decision- making because quarterbacks are the single most important player for team success and require significant financial investment. This paper compares two approaches for predicting next-season quarterback performance for established NFL quarterbacks: a delta age-curve baseline and a random forest regression model. The dataset consists of NFL quarterback seasons from 2006 through 2025 and includes variables on prior performance, usage, efficiency, receiving corps strength, and coaching continuity. The delta method provides a simple and interpretable baseline by estimating age-specific average year-to-year changes in quarterback performance. The random forest allows for more individualized predictions. The random forest outperforms the delta baseline on both root mean squared error (RMSE) and mean absolute error (MAE). In addition to improved predictive accuracy, the random forest has an adaptive nearest-neighbor interpretation that allows each prediction to be explained through historically similar player-seasons. The model performance results suggest that quarterback trajectories are better captured by similarity-based machine learning methods than by a single global age curve alone.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p12",
    year: 2026,
    title: "Uncovering Strategic Archetypes: A Behavioral Clustering Analysis of NASCAR Cup Series Drivers, and can a driver's archetype predict their relative performance advantage or disadvantage on different track types (e.g., superspeedways vs. short tracks)?",
    authors: "Savan Patel",
    venue: "NASCAR",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p13",
    year: 2026,
    title: "Quantifying the Cost of Allowing Major League Baseball Players to Call Pitches",
    authors: "Andersen Pickard",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "Pitch selection in Major League Baseball has remained a largely intuitive process, historically delegated to the catcher despite baseball’s broader embrace of data analytics. This paper proposes and implements a machine learning framework to quantify the cost of suboptimal pitch selection decisions and evaluate the performance of pitchers, catchers, teams, and pitcher-catcher batteries. Using Statcast pitch-level data from the 2021 through 2025 MLB seasons, a LightGBM gradient boosting model is trained to predict runs lost as a function of game situation and pitch characteristics. The trained model is then applied to generate counterfactual pitch scenarios for every pitch thrown in 2025, estimating the expected run value of each pitch type a pitcher could have thrown in a given situation. The pitch type with the lowest predicted run value is identified as the optimal selection, and the difference between the predicted run value of the actual pitch and the optimal pitch is quantified as runs lost. Aggregated across pitchers, catchers, teams, and batteries, these pitch-level estimates reveal substantial variation in pitch selection quality across the league. League-wide, MLB players selected the optimal pitch type just 25.2% of the time in 2025. The findings suggest that predictive modeling tools capable of transmitting optimal pitch calls from the dugout to the field in real time could offer organizations a meaningful and largely untapped competitive advantage over their opponents, resulting in potentially 100+ additional runs per season.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p14",
    year: 2026,
    title: "The Coors Effect",
    authors: "Kenneth Soh",
    venue: "Baseball",
    summary:
      "",
    abstract:
      "Coors Field is one of the most extreme offensive environments in Major League Baseball due to its high altitude and reduced air density, which affect both pitch movement and batted-ball flight. Traditional park factor adjustments account for average run inflation but typically assume that park effects apply uniformly across all players. This assumption may mask meaningful differences in how individual hitter skill profiles interact with the unique conditions in Denver.<br> <br> This study examines whether certain types of hitters benefit more from the Coors Field environment by analyzing plate appearance–level Statcast data from the 2015–2025 MLB seasons. Offensive performance is measured using run value, which captures how each plate appearance changes a team’s expected runs given the game state. Hitter traits are summarized using quality of contact, spray and launch angle tendencies, and plate discipline metrics derived from batted-ball and swing data. Players are grouped into offensive archetypes using clustering methods applied to these traits.<br> <br>  Mixed-effects regression models are then used to estimate the impact of Coors Field on run value while accounting for player identity, opposing pitchers, and seasonal variation. Results show that Coors Field significantly increases offensive output across plate appearances, but hitter archetypes do not experience meaningfully different park effects. These findings suggest that the altitude-driven advantages of Coors Field operate broadly across offensive styles rather than disproportionately favoring specific hitter types. Overall, the results indicate that variation in Coors performance is better explained by continuous skill traits rather than discrete hitter archetypes.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p15",
    year: 2026,
    title: "Optimizing Saving Decisions in Counter-Strike 2",
    authors: "Lou Zhou",
    venue: "CS2",
    summary:
      "",
    abstract:
      "Not available at the moment. Please check back later.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },
   {
    id: "p16",
    year: 2026,
    title: "Quantifying the Evolution of NFL Defensive Strategies (2020-2024): An Expected Points Added Analysis Using Gaussian Mixture Models",
    authors: "Peyton Stevenson",
    venue: "Football",
    summary:
      "",
    abstract:
      "As NFL offenses have increasingly relied on high-efficiency passing and spread concepts, defensive play-callers have been forced to adapt their personnel and schemes. Traditional positional designations (e.g., 4-3 or 3-4 base defenses) fail to capture the functional reality of modern defensive deployments. This study utilizes five seasons of play-by-play and player-tracking data (2020-2024) to objectively evaluate defensive success via Expected Points Added (EPA). 2025 player-tracking data was also used for clustering, but 2025 play-by-play data is not currently accessible. By applying Gaussian Mixture Models (GMM) to Pro Football Focus (PFF) grades and alignment data, defensive players were clustered into highly specific, functional archetypes. The study evaluated the EPA of broad base schemes, quantified the efficiency of exact 11-man archetype combinations, and tracked year-over-year deployment trends. Results indicate a sustained league-wide abandonment of traditional base defenses in favor of the 4-2-5 Nickel. Furthermore, archetype-level analysis reveals that the most efficient defensive strategies prioritize deep, zone-based coverage players over traditional interior run-stoppers. This tactical valuation framework establishes a vital foundation for future research into the cost-efficiency and salary cap allocation of modern defensive units.",
    links: {
      doi: "",
      code: '',
      poster: null,
      pdf: null
    },
    thumbnail: null
  },

  {
    id: "p100",
    year: 2024,
    title: "Title C",
    authors: "C",
    venue: "SMGT 490 Project (2024)",
    summary:
      "Title C",
    abstract:
      "Title C studies ...",
    links: {
      code: "#",
      poster: "#",
      pdf: "#"
    },
    thumbnail: "assets/project1.png"
  }
];
