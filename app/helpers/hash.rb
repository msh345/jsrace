class Hash
  def has_blank?
    self.reject{|k,v| !v.nil? || v.length > 0}.size > 0
  end
end
