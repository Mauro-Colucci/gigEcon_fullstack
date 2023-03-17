import Gig from "../models/Gig.js";
import createError from "../utils/createError.js";
import Review from "../models/Review.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review."));
  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (review)
      return next(
        createError(403, "You already created a review for this gig.")
      );
    //should check if req.userId bought the product/service from the gigId first from the Order model (todo).
    const newReview = await Review.create({
      ...req.body,
      userId: req.userId,
    });
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(newReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.id });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (review.userId !== req.userId)
      return next(createError(403, "You can only delete your review."));
    await review.deleteOne();
    res.status(200).send("Review has been deleted");
  } catch (err) {
    next(err);
  }
};
