import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function BackLink({ link, page }: { link: string; page: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    >
      <div className="text-center mt-5">
        <Link href={link} className="btn btn-gradient px-4 py-2">
          <FaArrowLeft className="me-2" aria-hidden="true" />
          Back to {page}
        </Link>
      </div>
    </motion.div>
  );
}

export default BackLink;
