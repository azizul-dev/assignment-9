import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const RequestPet = ({pet}) => {
    return (
        <div>
            <Button>
                 <Link
                  href={`/pets/${pet._id}`}
                  className="flex-1 h-10 px-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02] whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg,#4A90A4,#A8E6CF)",
                  }}
                >
                  Requests
                  <FaArrowRight size={12} />
                </Link>
            </Button>
        </div>
    );
};

export default RequestPet;