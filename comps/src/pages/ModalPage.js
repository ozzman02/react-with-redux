import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal!
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
        augue vel eleifend vulputate. Integer interdum, nulla sed consectetur
        ornare, odio nunc faucibus elit, at convallis purus nulla sit amet quam.
        Quisque vel mauris iaculis metus molestie viverra. Nullam at purus
        semper, posuere nibh a, pretium ipsum. Aliquam porttitor tortor velit,
        non sodales lorem euismod nec. Sed et magna posuere, laoreet nunc et,
        suscipit felis. Duis turpis quam, malesuada pretium ipsum et,
        consectetur aliquet ligula. In hac habitasse platea dictumst. Integer
        suscipit sit amet arcu eu efficitur. Phasellus id diam at nibh feugiat
        faucibus ac vel mi.
      </p>
    </div>
  );
}
