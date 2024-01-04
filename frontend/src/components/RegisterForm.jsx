import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/register-user`, formData);
      toast.success("User registration successfully");
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data);
      console.log(error.response.data);
    }
  };
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Registration Of Users</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">username</Label>
                <Input
                  onChange={handleInputChange}
                  id="username"
                  placeholder="Enter your username"
                  required="true"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">email</Label>
                <Input
                  onChange={handleInputChange}
                  id="email"
                  placeholder="enter  your email"
                  required="true"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">password</Label>
                <Input
                  onChange={handleInputChange}
                  id="password"
                  placeholder="enter  your password"
                  required="true"
                  type="password"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Button className="">
                  {loading ? 'please wait...' : "Register"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
