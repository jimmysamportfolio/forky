CREATE INDEX "nodes_graph_id_idx" ON "nodes" USING btree ("graph_id");
CREATE INDEX "nodes_parent_id_idx" ON "nodes" USING btree ("parent_id");