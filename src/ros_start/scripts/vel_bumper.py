#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist
from kobuki_msgs.msg import BumperEvent

rospy.init_node('vel_publisher')
pub=rospy.Publisher('/mobile_base/commands/velocity',Twist,queue_size=10)
def callback(bunper):
	print(bunper)
	vel=Twist()
	vel.liner.x=-1.0
	pub.publish(vel)

sub=rospy.Subscriber('/mobile_base/events/bumper',BumperEvent,callback)

while not rospy.is_shutdown():
        vel=Twist()
        direction=input('f:forward,b:backword,l:left,r:right>')
        if'f'in direction:
            vel.linear.x=0.5
        if'b'in direction:
            vel.linear.x=-0.5
        if'l'in direction:
            vel.angular.z=1.0
        if'r'in direction:
            vel.angular.z=-1.0
        if'q'in direction:
            break
        print(vel)
        pub.publish(vel)
