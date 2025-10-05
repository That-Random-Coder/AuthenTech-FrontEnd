// src/components/SummaryCard/SummaryCard.js
import React from "react";
import "./SummaryCard.scss";

/**
 * Props:
 * - title: string
 * - value: string | number
 * - description: string (optional small text under value)
 * - variant: 'blue' | 'green' | 'purple' | 'teal' etc.
 */
const SummaryCard = ({ title, value, description, variant = "blue" }) => {
  return (
    <div className={`summary-card summary-card--${variant}`}>
      <h3 className="summary-card__title">{title}</h3>
      <div className="summary-card__value">{value}</div>
      {description && (
        <div className="summary-card__description">{description}</div>
      )}
    </div>
  );
};

export default SummaryCard;
