import React from "react";
import Container from "../common/Container";

const SingleProjectSkeleton = () => {
  return (
    <div className="w-full mt-20 md:mt-40 p-5 animate-pulse">
      <Container>
        {/* Image Skeleton */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="w-full h-[250px] md:h-[600px] bg-neutral-800 rounded-lg" />

          {/* Arrows */}
          <div className="absolute left-5 md:left-10 bottom-5 md:bottom-30 w-10 h-10 md:w-17 md:h-17 rounded-full bg-neutral-700" />
          <div className="absolute right-5 md:right-10 bottom-5 md:bottom-30 w-10 h-10 md:w-17 md:h-17 rounded-full bg-neutral-700" />
        </div>

        {/* Content */}
        <div className="mt-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="h-10 w-72 bg-neutral-800 rounded-lg mb-3" />
              <div className="h-8 w-96 max-w-full bg-neutral-800 rounded-lg" />
            </div>

            <div className="w-full md:w-auto">
              <div className="h-5 w-40 bg-neutral-800 rounded ml-auto" />

              <div className="flex flex-wrap gap-3 mt-4 md:justify-end">
                <div className="h-8 w-24 bg-neutral-800 rounded-full" />
                <div className="h-8 w-24 bg-neutral-800 rounded-full" />
                <div className="h-8 w-24 bg-neutral-800 rounded-full" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 space-y-3">
            <div className="h-4 w-full bg-neutral-800 rounded" />
            <div className="h-4 w-full bg-neutral-800 rounded" />
            <div className="h-4 w-11/12 bg-neutral-800 rounded" />
            <div className="h-4 w-10/12 bg-neutral-800 rounded" />
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <div className="h-8 w-40 bg-neutral-800 rounded mb-6" />

            <div className="flex flex-wrap gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-28 bg-neutral-800 rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-10">
            <div className="h-8 w-24 bg-neutral-800 rounded mb-6" />

            <div className="space-y-4">
              <div className="h-6 w-80 max-w-full bg-neutral-800 rounded" />
              <div className="h-6 w-72 max-w-full bg-neutral-800 rounded" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProjectSkeleton;