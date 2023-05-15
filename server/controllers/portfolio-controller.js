const Portfolio = require("../models/portfolio-model");

// Function to create a new portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const { portfolioName, PortfolioDescription, PortfolioImg } = req.body;
    const portfolio = await Portfolio.create({
      portfolioName,
      PortfolioDescription,
      portfolioImg,
    });
    res
      .status(201)
      .json({ message: "Portfolio created successfully", portfolio });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to update a portfolio
exports.updatePortfolio = async (req, res) => {
  try {
    const { portfolioName, PortfolioDescription, portfolioImg } = req.body;
    const { id } = req.params;
    const portfolio = await Portfolio.update(
      { portfolioName, PortfolioDescription, portfolioImg },
      { where: { id } }
    );
    res
      .status(200)
      .json({ message: "Portfolio updated successfully", portfolio });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to delete a portfolio
exports.deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    await Portfolio.destroy({ where: { id } });
    res.status(200).json({ message: "Portfolio deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get all portfolios
exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.findAll();
    res.status(200).json({ portfolios });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};
