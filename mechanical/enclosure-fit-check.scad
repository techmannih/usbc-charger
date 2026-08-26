/*
  USB-C PD charger enclosure — DIMENSIONAL FIT CHECK ONLY.

  This is not a certified, flame-safe or production-ready mains enclosure.
  Final material, wall/rib geometry, cord anchorage, accessibility and thermal
  performance require review and testing by the product safety laboratory.

  Set part to "base", "lid" or "assembly" before exporting an STL/3MF.
*/

$fn = 48;
part = "assembly";

board_x = 110;
board_y = 60;
board_z = 1.6;
outer_x = 116;
outer_y = 66;
base_z = 40;
wall = 2;
lid_z = 2;
corner_r = 2;

standoff_h = 3;
standoff_od = 7;
mount_hole = 3.2;
mount_clearance = 0.25;
mount_xy = [[-50, -25], [-50, 25], [50, -25], [50, 25]];

pcb_floor_z = wall + standoff_h;
port_center_z = pcb_floor_z + board_z + 1.7;
cable_hole_d = 9;
usb_cutout_y = 10.5;
usb_cutout_z = 4.5;

module rounded_xy_box(size, radius) {
  linear_extrude(height = size[2], center = true)
    offset(r = radius)
      square([size[0] - 2 * radius, size[1] - 2 * radius], center = true);
}

module pill_2d(length, height) {
  hull() {
    translate([-(length - height) / 2, 0]) circle(d = height);
    translate([(length - height) / 2, 0]) circle(d = height);
  }
}

module base_shell() {
  difference() {
    translate([0, 0, base_z / 2])
      rounded_xy_box([outer_x, outer_y, base_z], corner_r);

    // Open-top internal cavity; the bottom wall remains intact.
    translate([0, 0, wall + (base_z - wall + 0.2) / 2])
      rounded_xy_box(
        [outer_x - 2 * wall, outer_y - 2 * wall, base_z - wall + 0.2],
        max(corner_r - wall / 2, 0.5)
      );

    // Left-wall cable-gland pilot aperture.
    translate([-outer_x / 2 - 0.1, 0, port_center_z])
      rotate([0, 90, 0]) cylinder(d = cable_hole_d, h = wall + 0.2);

    // Right-wall USB-C pill aperture.
    translate([outer_x / 2 - wall - 0.1, 0, port_center_z])
      rotate([0, 90, 0])
        linear_extrude(height = wall + 0.2)
          rotate(90) pill_2d(usb_cutout_y, usb_cutout_z);
  }

  // Four standoffs match the PCB's non-plated mounting holes.
  for (xy = mount_xy) {
    translate([xy[0], xy[1], wall])
      difference() {
        cylinder(d = standoff_od, h = standoff_h);
        cylinder(d = mount_hole + mount_clearance, h = standoff_h + 0.1);
      }
  }
}

module lid() {
  union() {
    translate([0, 0, lid_z / 2])
      rounded_xy_box([outer_x, outer_y, lid_z], corner_r);

    // Loose locating lip for fit checks; not a certified closure method.
    translate([0, 0, -1])
      difference() {
        rounded_xy_box([outer_x - 2 * wall - 0.4, outer_y - 2 * wall - 0.4, 2], 1);
        rounded_xy_box([outer_x - 4 * wall, outer_y - 4 * wall, 2.2], 0.5);
      }
  }
}

module pcb_mockup() {
  color([0.05, 0.35, 0.2, 0.55])
    translate([0, 0, pcb_floor_z + board_z / 2])
      cube([board_x, board_y, board_z], center = true);
}

if (part == "base") {
  base_shell();
} else if (part == "lid") {
  lid();
} else {
  color([0.75, 0.75, 0.78, 0.65]) base_shell();
  pcb_mockup();
  color([0.85, 0.85, 0.88, 0.45])
    translate([0, 0, base_z + 8]) lid();
}
